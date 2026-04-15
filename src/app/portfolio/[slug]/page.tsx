type PortfolioDetailPageProps = {
  params: { slug: string };
};

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-neutral-900">포트폴리오 상세</h1>
      <p className="mt-2 text-sm text-neutral-600">
        경로: /portfolio/{params.slug} — placeholder
      </p>
    </div>
  );
}
