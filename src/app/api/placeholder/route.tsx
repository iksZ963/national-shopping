import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  // Get width and height from query parameters or default to 600x400
  const widthParam = parseInt(searchParams.get('width') || '600', 10);
  const heightParam = parseInt(searchParams.get('height') || '400', 10);

  // Set width and height to be the same if only one is provided
  const width = isNaN(widthParam) ? 600 : (isNaN(heightParam) ? widthParam : widthParam);
  const height = isNaN(heightParam) ? width : heightParam;

  // Get text from query parameters, or use size as text if not provided
  const text = searchParams.get('text');
  const sizeText = `${width} x ${height}`;

  // Calculate a responsive font size based on image dimensions
  const fontSize = Math.min(width, height) / 10;
  const sizeFontSize = Math.min(width, height) / 20;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: `${fontSize}px`,
          backgroundColor: '#e0e0e0',
          backgroundImage:
            'linear-gradient(135deg, #d1d1d1 25%, #f0f0f0 25%, #f0f0f0 50%, #d1d1d1 50%, #d1d1d1 75%, #f0f0f0 75%, #f0f0f0 100%)',
          backgroundSize: '28.28px 28.28px',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#555',
          textAlign: 'center',
          padding: '0 20px',
          boxSizing: 'border-box',
          border: '2px dashed #bbb',
        }}
      >
        <div>
          {text || sizeText}
        </div>
        {text && (
          <div
            style={{
              marginTop: '10px',
              fontSize: `${sizeFontSize}px`,
              color: '#777',
            }}
          >
            {sizeText}
          </div>
        )}
      </div>
    ),
    {
      width: width,
      height: height,
    }
  );
}
