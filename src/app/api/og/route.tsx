/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Use the Edge runtime
export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title") || "No Title Provided";
  const productImage = searchParams.get("pm");

  // Load custom font
  const font = fetch(
    new URL("../../../../public/fonts/Outfit-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontFamily: "Outfit",
          fontSize: 32,
          fontWeight: 600,
          position: "relative",
          padding: "40px",
        }}
      >
        {/* Logo top-left */}
        <img
          src="https://Royal IT BD-shop-2.vercel.app/images/logo.png"
          alt="Royal IT BD Logo"
          width="180"
          height="40"
          style={{
            position: "absolute",
            top: "20px",
            left: "30px",
          }}
        />

        {/* Optional product image */}
        {productImage && (
          <img
            src={productImage}
            alt="Product"
            width={150}
            height={150}
            style={{
              borderRadius: "12px",
              objectFit: "cover",
              marginBottom: "30px",
            }}
          />
        )}

        {/* Title text */}
        <div
          style={{
            textAlign: "center",
            fontSize: "26px",
            color: "#1a1a1a",
            maxWidth: "90%",
            lineHeight: 1.4,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 600,
      height: 315,
      fonts: [
        {
          name: "Outfit",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}

