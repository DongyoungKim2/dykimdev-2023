"use client"

const GA_Measurement_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
import Head from 'next/head';
import Script from 'next/script';

export default function GoogleAnalytics() {
    return (
        <Head>
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-PDLHHVCPF5`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PDLHHVCPF5', {
            page_path: window.location.pathname,
          });
        `,
                }}
            />
        </Head>
    )
}