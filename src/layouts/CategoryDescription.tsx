import './CategoryDescription.css';

interface CategoryDescriptionProps {
  title: string;
  description: string;
}

export default function CategoryDescription({
  title,
  description,
}: CategoryDescriptionProps) {
  return (
    <>
      <h2 className="heading">{title}</h2>
      <div className="description">
        <p>{description}</p>
      </div>
    </>
  );
}
