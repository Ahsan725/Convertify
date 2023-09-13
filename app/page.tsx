// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Blazing Fast Unlimited File Converter
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Experience the boundless creativity of Convertify Pro - your
          go-to online solution for limitless and complimentary multimedia transformation. Seamlessly convert images, audio, and videos with unparalleled freedom.
          Begin your conversions now and take your content to new heights!
        </p>
      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}
