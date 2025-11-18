import Image from "next/image";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img-boa.jpg"
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-8">
        {children}
      </div>

    </div>
  );
}
