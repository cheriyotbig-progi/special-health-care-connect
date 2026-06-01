# Transformation Plan: Healthcare to News Website

Transform the "Holistic Haven" healthcare site into a professional news portal.

## 1. Foundation & Types
- **src/types/index.ts**: Define `Article`, `Category`, `Author`, and `Comment` interfaces.
- **src/lib/data.ts**: Replace healthcare data (doctors, appointments) with news articles, categories, and editorial staff data. Set "Holistic News" as the new name.

## 2. Global Layout
- **src/components/layout/Navbar.tsx**: Update navigation to include news categories (Politics, Tech, Business, Sports, Entertainment).
- **src/components/layout/Footer.tsx**: Update with newsroom contact info, social feeds, and newsletter signup.

## 3. Routing (src/App.tsx)
- **New Routes**:
  - `/`: News Home (Featured + Grid)
  - `/latest`: Latest News listing
  - `/category/:slug`: Category-specific news
  - `/article/:id`: Full article view
- **Removed Routes**: `/booking`, `/doctors`, `/services`.

## 4. Page Redesign
- **src/pages/Home.tsx**: Portfolio of featured stories, trending list, and category blocks.
- **src/pages/NewsListing.tsx**: Paginated list of articles.
- **src/pages/ArticleDetail.tsx**: Full article reading experience with social share and related posts.

## 5. Component Repurposing
- **src/components/home/Hero.tsx**: Update to showcase the "Breaking News" or "Top Story" of the day.
- **src/components/home/NewsGrid.tsx**: A grid to display multiple article cards.
- **src/components/home/Newsletter.tsx**: Call to action for daily news digests.

## 6. Metadata & Polish
- **index.html**: Update title and meta description for news context.
- **src/index.css**: Subtle color palette shift to journalistic style.
