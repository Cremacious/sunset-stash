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
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-md">
      <span className="text-yellow-300 font-bold text-lg fugaz-font">
        {getInitials(name)}
      </span>
    </div>
  );
};

export default UserImage;
