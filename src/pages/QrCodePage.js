import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function QrCodePage(data) {
  const [qrText, setQrText] = useState(JSON.stringify(data.data));

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={() => setQrText(JSON.stringify(data.data))}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Generate QR Code
      </button>
      <div style={{ marginTop: '20px' }}>
        {qrText && <QRCodeCanvas value={qrText} size={200} />}
      </div>
    </div>
  );
}

export default QrCodePage;
