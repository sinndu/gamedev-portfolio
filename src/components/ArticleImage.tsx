import Image from "astro:assets"

type ArticleImageProps = {
    imageURL: string | undefined;
  };
  
  export default function ArticleImage({ imageURL }: ArticleImageProps) {
    if (!imageURL) {
      return null;
    }
  
    return (
      <div>
        <img src={`/images/${imageURL}`} alt="" />
      </div>
    );
  }