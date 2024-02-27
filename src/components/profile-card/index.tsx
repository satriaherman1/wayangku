import "@src/styles/profile-card.css";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

export default function ProfileCard({ title, imageUrl, description }: Props) {
  const backgroundStyle = {
    backgroundImage: `url('${imageUrl}')`,
  };
  return (
    <div style={backgroundStyle} className="profile-card">
      <h2 className="text-3xl">{title}</h2>
      <p className="mt-3 text-lg">{description}</p>

      <div className="profile-card-background-overlay"></div>
    </div>
  );
}
