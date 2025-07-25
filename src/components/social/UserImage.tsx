type UserImageProps = {
  name: string;
};

const UserImage = ({ name }: UserImageProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0]?.toUpperCase())
      .join('');
  };

  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-50 via-purple-100 to-pink-200 flex items-center justify-center shadow-md">
      <span className="text-purple-700 font-bold text-lg">
        {getInitials(name)}
      </span>
    </div>
  );
};

export default UserImage;
