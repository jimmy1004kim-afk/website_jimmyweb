type TemplateDetailPageProps = {
  params: { slug: string };
};

export default function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-neutral-900">템플릿 상세</h1>
      <p className="mt-2 text-sm text-neutral-600">
        경로: /templates/{params.slug} — placeholder
      </p>
    </div>
  );
}
