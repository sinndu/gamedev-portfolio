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
        <img src={`/images/${imageURL}`} alt="Image" class="mb-4 w-100% border-4 border-black rounded-lg p-1 dark:border-white"/>
      </div>
    );
  }