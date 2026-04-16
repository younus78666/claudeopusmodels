type SectionHeadingProps = {
  tag: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  tag,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-tag">{tag}</p>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
