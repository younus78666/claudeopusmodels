import { siteName } from "../content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {siteName} &middot; Expert analysis of Anthropic's AI models
    </footer>
  );
}
