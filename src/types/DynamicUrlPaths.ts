type Params = {
  params: {
    [k: string]: string;
  };
};

type DynamicUrlPaths = {
  paths: Params[];
  fallback: boolean;
};

export default DynamicUrlPaths;
