import axios from 'axios';
import cheerio from 'cheerio';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const ogTags: { [key: string]: string } = {};
    $('meta[property^="og:"]').each((_, element) => {
      const property = $(element).attr('property');
      const content = $(element).attr('content');
      if (property && content) {
        const formattedKey = property.replace('og:', '').replace(':', ''); // Remove 'og:' prefix and ':'
        const formattedKeyCamelCase = formattedKey.replace(/_([a-z])/g, (g) => g[1].toUpperCase()); // Convert snake_case to camelCase
        ogTags[`og${formattedKeyCamelCase.charAt(0).toUpperCase()}${formattedKeyCamelCase.slice(1)}`] = content;
      }
    });

    return NextResponse.json(ogTags);
  } catch (error) {
    console.error('Error fetching or parsing Open Graph tags:', error);
    return NextResponse.json({ error: 'Failed to fetch or parse Open Graph tags' }, { status: 500 });
  }
};