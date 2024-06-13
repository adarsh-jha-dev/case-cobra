import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignConfigurator from "./DesignConfigurator";

interface DesignPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: DesignPageProps) => {
  // make the db call
  const { id } = searchParams;
  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, height, width } = configuration;

  return (
    <DesignConfigurator
      configId={configuration.id}
      imageUrl={imageUrl}
      imageDimensions={{
        height,
        width,
      }}
    />
  );
};

export default Page;
