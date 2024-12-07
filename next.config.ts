import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // When using http inside a image we need to give access to next JS 
  // to do that we need to add the following code
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  }
    
};
export default nextConfig;

