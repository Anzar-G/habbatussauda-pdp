import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CONTACT_INFO, PRICING_TIERS, PAYMENT_OPTIONS, SHIPPING_INFO } from '../constants';
import { ShoppingCart, ArrowLeft, Copy, Check } from 'lucide-react';

const OrderPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState<'1' | '2' | '3'>('1');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [courier, setCourier] = useState<string>('');
  const [copiedKey, setCopiedKey] = useState<string>('');
  const [formError, setFormError] = useState<string>('');

  const copyToClipboard = async (text: string, key: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(''), 1500);
    } catch (e) {
      // noop
    }
  };

  const selectedTier = useMemo(() => {
    if (quantity === '1') return PRICING_TIERS.find(t => t.id === '1');
    if (quantity === '2') return PRICING_TIERS.find(t => t.id === '2');
    return PRICING_TIERS.find(t => t.id === '3');
  }, [quantity]);

  const totalPrice = selectedTier?.price ?? 0;

  useEffect(() => {
    const qp = searchParams.get('qty');
    if (qp === '1' || qp === '2' || qp === '3') {
      setQuantity(qp);
    }
  }, [searchParams]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedAddress = address.trim();
    const digitsPhone = phone.replace(/\D/g, '');

    if (!trimmedName || trimmedName.length < 3) {
      setFormError('Nama lengkap harus diisi minimal 3 karakter.');
      return;
    }
    if (digitsPhone.length < 10 || !digitsPhone.startsWith('08')) {
      setFormError('Nomor WhatsApp tidak valid. Gunakan format Indonesia, contoh: 08xxxxxxxxxx');
      return;
    }
    if (!trimmedAddress || trimmedAddress.length < 10) {
      setFormError('Alamat lengkap masih terlalu pendek. Mohon sertakan jalan, RT/RW, kelurahan, kecamatan, kota, dan provinsi.');
      return;
    }

    setFormError('');

    // Deskripsi paket yang berbeda untuk tiap pilihan
    const packageDetails = (() => {
      switch (quantity) {
        case '1':
          return (
            'PAKET 1 BOTOL (60 kapsul softgel)\n' +
            '- Cocok untuk pemakaian 1 orang selama ±1 bulan\n' +
            '- Ideal sebagai percobaan awal atau maintenance harian\n' +
            '- Bonus: Konsultasi gratis seputar aturan minum & pola hidup sehat\n'
          );
        case '2':
          return (
            'PAKET SEHAT 2 BOTOL (120 kapsul softgel)\n' +
            '- Untuk pemakaian ±2 bulan / berdua dengan keluarga\n' +
            '- Lebih hemat dibanding beli satuan (hemat Rp 3.000)\n' +
            '- Bonus: E-book resep & tips hidup sehat berbasis herbal\n'
          );
        case '3':
        default:
          return (
            'PAKET KELUARGA 3 BOTOL (180 kapsul softgel)\n' +
            '- Cocok untuk stok sekeluarga / 3 bulan pemakaian rutin\n' +
            '- Paling hemat (hemat Rp 5.500) + prioritas konsultasi\n' +
            '- Bonus: GRATIS ONGKIR (syarat & ketentuan berlaku) + E-book lengkap\n'
          );
      }
    })();

    const paymentLine = paymentMethod
      ? `%0A- Metode Pembayaran: ${encodeURIComponent(paymentMethod)}`
      : '';
    const courierLine = courier
      ? `%0A- Kurir: ${encodeURIComponent(courier)}`
      : '';

    const msg =
      `Halo Admin SR12,%0A%0A` +
      `Saya ingin memesan *Habbatussauda SR12* dengan rincian berikut:%0A%0A` +
      `*DETAIL PAKET*%0A` +
      `${encodeURIComponent(packageDetails)}%0A` +
      `*TOTAL PEMBAYARAN*%0A` +
      `- Total: Rp ${totalPrice.toLocaleString('id-ID')}` +
      `${paymentLine}${courierLine}%0A%0A` +
      `*DATA PENERIMA*%0A` +
      `- Nama: ${encodeURIComponent(trimmedName)}%0A` +
      `- No. HP: ${encodeURIComponent(digitsPhone)}%0A` +
      `- Alamat lengkap: ${encodeURIComponent(trimmedAddress)}%0A%0A` +
      `*CATATAN TAMBAHAN*%0A` +
      `${encodeURIComponent(notes || 'Tidak ada catatan khusus')}` +
      `%0A%0A---%0A` +
      `*PT SR12 Herbal Kosmetik*%0A` +
      `Jl. Mulya 2, RT.005/RW.006, Karyamulya, Kec. Kesambi,%0A` +
      `Kota Cirebon, Jawa Barat 45131%0A%0A` +
      `Terima kasih.`;
    const wa = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${msg}`;
    window.open(wa, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-primary-600" aria-label="Kembali">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-bold">Form Pemesanan</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <form onSubmit={onSubmit} className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <div className="grid md:grid-cols-2 gap-4 border border-black rounded-lg p-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">No. WhatsApp</label>
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
            </div>
            <div className="border border-black rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
              <textarea
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                rows={4}
                placeholder="Jalan, RT/RW, Kel/Desa, Kec, Kota/Kab, Provinsi, Kode Pos"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-black rounded-lg p-4">
              {(['1','2','3'] as const).map(q => (
                <label key={q} className={`cursor-pointer border rounded-lg p-4 flex items-center justify-between ${quantity === q ? 'border-primary-500 ring-2 ring-primary-500/20 bg-primary-50' : 'border-gray-200'}`}>
                  <div>
                    <p className="font-semibold">{q} Botol</p>
                    <p className="text-xs text-gray-500">{PRICING_TIERS.find(t => t.id === (q === '1' ? '1' : q === '2' ? '2' : '3'))?.name}</p>
                  </div>
                  <input type="radio" name="qty" className="hidden" checked={quantity === q} onChange={() => setQuantity(q)} />
                </label>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-black rounded-lg p-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Metode Pembayaran (opsional)</label>
                <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500">
                  <option value="">Pilih metode</option>
                  {PAYMENT_OPTIONS.bankAccounts.map(b => (
                    <option key={`${b.bank}-${b.number}`} value={`Transfer ${b.bank}`}>{`Transfer ${b.bank} (${b.number} a.n. ${b.holder})`}</option>
                  ))}
                  {PAYMENT_OPTIONS.ewallets?.map(e => (
                    <option key={`${e.name}-${e.number}`} value={e.name}>{`${e.name} (${e.number})`}</option>
                  ))}
                  <option value="COD">COD (Bayar di Tempat)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kurir (opsional)</label>
                <select value={courier} onChange={e => setCourier(e.target.value)} className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500">
                  <option value="">Pilih kurir</option>
                  {(SHIPPING_INFO.couriers ?? ['JNE','J&T','SiCepat','Anteraja']).map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 text-xs text-gray-700">
              <p className="font-semibold text-amber-800 mb-1">Catatan bukti pembayaran</p>
              <p className="mb-1">
                Jika memilih pembayaran transfer (rekening / e-wallet), setelah melakukan pembayaran mohon kirimkan
                <span className="font-semibold"> foto atau screenshot bukti transfer</span> ke chat WhatsApp yang terbuka.
              </p>
              <p className="text-gray-600">
                Bukti pembayaran membantu admin memverifikasi dan mempercepat proses pesanan Anda.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Catatan (opsional)</label>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500" rows={3} placeholder="Misal: Titip kurir telpon dulu, patokan lokasi, dll"></textarea>
            </div>
            {formError && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {formError}
              </p>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl"
            >
              <ShoppingCart className="w-5 h-5" /> Kirim ke WhatsApp
            </button>
          </form>

          <aside className="space-y-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-3">Ringkasan</h3>
              <p className="text-sm text-gray-600">Paket: {selectedTier?.name}</p>
              <p className="text-sm text-gray-600">Total: <span className="font-bold text-gray-900">{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</span></p>
              {selectedTier?.savings ? (
                <p className="text-xs text-red-600 mt-1">Hemat {selectedTier.savings.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</p>
              ) : null}
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-3">Pembayaran</h3>
              <div className="space-y-3">
                {PAYMENT_OPTIONS.bankAccounts.map(b => {
                  const key = `${b.bank}-${b.number}`;
                  return (
                    <div key={key} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{b.bank}</p>
                          <p className="font-mono text-sm text-gray-700">{b.number} <span className="text-xs text-gray-500">a.n. {b.holder}</span></p>
                        </div>
                        <button type="button" onClick={() => copyToClipboard(b.number, key)} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-100 text-gray-700">
                          {copiedKey === key ? (<><Check className="w-4 h-4" /> Disalin</>) : (<><Copy className="w-4 h-4" /> Salin</>)}
                        </button>
                      </div>
                    </div>
                  );
                })}
                {PAYMENT_OPTIONS.ewallets?.map(e => {
                  const key = `${e.name}-${e.number}`;
                  return (
                    <div key={key} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{e.name}</p>
                          <p className="font-mono text-sm text-gray-700">{e.number}</p>
                        </div>
                        <button type="button" onClick={() => copyToClipboard(e.number, key)} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-100 text-gray-700">
                          {copiedKey === key ? (<><Check className="w-4 h-4" /> Disalin</>) : (<><Copy className="w-4 h-4" /> Salin</>)}
                        </button>
                      </div>
                    </div>
                  );
                })}
                <p className="text-xs text-gray-500">Tersedia juga COD (Bayar di Tempat) untuk area tertentu.</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-3">Pengiriman</h3>
              <p className="text-xs text-gray-600 mb-2">Kurir yang tersedia:</p>
              <div className="flex flex-wrap gap-2">
                {(SHIPPING_INFO.couriers ?? ['JNE','J&T','SiCepat','Anteraja']).map(c => (
                  <span key={c} className="text-xs bg-gray-100 border border-gray-200 rounded px-2 py-1 text-gray-700">{c}</span>
                ))}
              </div>
              {SHIPPING_INFO.codCities && SHIPPING_INFO.codCities.length > 0 && (
                <p className="text-xs text-gray-600 mt-3">COD: {SHIPPING_INFO.codCities.join(', ')}</p>
              )}
            </div>
            
          </aside>
        </div>
      </main>
    </div>
  );
};

export default OrderPage;
