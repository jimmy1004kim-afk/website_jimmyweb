type ContentsDetailPageProps = {
  params: { slug: string };
};

export default function ContentsDetailPage({ params }: ContentsDetailPageProps) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-neutral-900">컨텐츠 상세</h1>
      <p className="mt-2 text-sm text-neutral-600">
        경로: /contents/{params.slug} — placeholder
      </p>
    </div>
  );
}
