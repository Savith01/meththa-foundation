import React, { useState } from 'react';
import { Heart, Landmark, Gift, Award } from 'lucide-react';

export default function FundUs() {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(100);
  const [customVal, setCustomVal] = useState<string>('');

  const sponsorshipLevels = [
    { amount: 50, label: "Sponsor a Wheelchair", details: "Provides a custom-aligned local all-terrain wheelchair for a child or senior." },
    { amount: 100, label: "Below-Knee Prosthetic", details: "Sponsors a complete thermoplastic socket, pylon, SACH foot, and rehabilitation training." },
    { amount: 180, label: "Above-Knee Prosthetic", details: "Sponsors a complete joint mechanism, safety lock knee, socket fabrication, and fitting clinics." },
    { amount: 500, label: "Sponsor a Mobile Camp", details: "Funds a clinical travel bus, technicians, materials, and accommodation to run a remote casting camp." }
  ];

  return (
    <div className="fund-us-page">
      <section className="section hero-bg" style={{ padding: 'var(--space-xl) 0 var(--space-lg)' }}>
        <div className="container text-center">
          <span className="badge badge-amber"><Heart size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Make an Impact</span>
          <h1 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>Fund Our Work</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
            We are a 100% donation-powered charity. Every pound or rupee you donate goes directly towards purchasing medical materials and operating local prosthetic workshops.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title">Why Sponsor a Limb?</h2>
              <p style={{ marginTop: 'var(--space-md)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                For an amputee parent, a prosthetic limb means the ability to return to the rice paddies or tea estates to support their family. For a child, it means the ability to walk to school on their own feet, play with peers, and dream of a future.
              </p>
              
              <div style={{ marginTop: 'var(--space-lg)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Registered Charity Status</h4>
                    <p style={{ fontSize: '0.9rem' }}>Registered Charity England & Wales No. 1104860 | Registered in Sri Lanka No. N(A)1117</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                    <Gift size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>UK Gift Aid Direct</h4>
                    <p style={{ fontSize: '0.9rem' }}>If you are a UK taxpayer, specify Gift Aid to boost your donation value by 25% at no extra cost to you.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 'var(--space-lg)', border: '1px solid var(--primary-subtle)' }}>
              <h3 style={{ marginBottom: 'var(--space-sm)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Heart size={24} style={{ fill: 'var(--primary)', color: 'var(--primary)' }} /> Secure Donation
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: 'var(--space-sm)' }}>
                {sponsorshipLevels.map((lvl) => (
                  <button
                    key={lvl.amount}
                    type="button"
                    onClick={() => { setSelectedAmount(lvl.amount); setCustomVal(''); }}
                    style={{
                      padding: '12px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid',
                      borderColor: selectedAmount === lvl.amount ? 'var(--primary)' : 'var(--neutral-300)',
                      backgroundColor: selectedAmount === lvl.amount ? 'var(--primary-subtle)' : '#ffffff',
                      color: selectedAmount === lvl.amount ? 'var(--primary)' : 'var(--neutral-900)',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    £{lvl.amount}
                  </button>
                ))}
              </div>

              <div className="form-group" style={{ marginBottom: 'var(--space-md)' }}>
                <button
                  type="button"
                  onClick={() => setSelectedAmount('custom')}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: selectedAmount === 'custom' ? 'var(--primary)' : 'var(--neutral-300)',
                    backgroundColor: selectedAmount === 'custom' ? 'var(--primary-subtle)' : '#ffffff',
                    color: selectedAmount === 'custom' ? 'var(--primary)' : 'var(--neutral-900)',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginBottom: '8px',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  Other Amount
                </button>
                
                {selectedAmount === 'custom' && (
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', top: '12px', fontWeight: 'bold' }}>£</span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="form-input"
                      value={customVal}
                      onChange={(e) => setCustomVal(e.target.value)}
                      style={{ paddingLeft: '28px' }}
                    />
                  </div>
                )}
              </div>

              <button className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                Proceed to PayPal / Card Donation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title text-center center" style={{ marginBottom: 'var(--space-lg)' }}>Direct Bank Transfer</h2>
          
          <div className="grid-2">
            <div className="card" style={{ padding: 'var(--space-md)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', marginBottom: 'var(--space-xs)' }}>
                <Landmark size={24} style={{ color: 'var(--primary)' }} />
                <h3>UK Bank Details (Sterling Transfers)</h3>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}><td style={{ padding: '8px 0', fontWeight: 'bold' }}>Bank:</td><td style={{ padding: '8px 0' }}>Barclays Bank PLC</td></tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}><td style={{ padding: '8px 0', fontWeight: 'bold' }}>Account Name:</td><td style={{ padding: '8px 0' }}>The Meththa Foundation</td></tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}><td style={{ padding: '8px 0', fontWeight: 'bold' }}>Sort Code:</td><td style={{ padding: '8px 0' }}>20-74-05</td></tr>
                  <tr><td style={{ padding: '8px 0', fontWeight: 'bold' }}>Account No:</td><td style={{ padding: '8px 0' }}>30607736</td></tr>
                </tbody>
              </table>
            </div>

            <div className="card" style={{ padding: 'var(--space-md)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', marginBottom: 'var(--space-xs)' }}>
                <Landmark size={24} style={{ color: 'var(--secondary)' }} />
                <h3>Sri Lanka Bank Details (Rupee Transfers)</h3>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}><td style={{ padding: '8px 0', fontWeight: 'bold' }}>Bank:</td><td style={{ padding: '8px 0' }}>Bank of Ceylon (BOC)</td></tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}><td style={{ padding: '8px 0', fontWeight: 'bold' }}>Account Name:</td><td style={{ padding: '8px 0' }}>The Meththa Rehabilitation Foundation</td></tr>
                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}><td style={{ padding: '8px 0', fontWeight: 'bold' }}>Branch:</td><td style={{ padding: '8px 0' }}>Maharagama Branch</td></tr>
                  <tr><td style={{ padding: '8px 0', fontWeight: 'bold' }}>Account No:</td><td style={{ padding: '8px 0' }}>0004381335</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
