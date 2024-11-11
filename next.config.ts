import type {NextConfig} from "next";

export default (phase: string):NextConfig => {
    // const isDev = phase === PHASE_DEVELOPMENT_SERVER
    const basePath:string = "/TestuRg1A15N3W/feature";
    return {
        output: 'export',
        images: {
            unoptimized: true,
        },
        trailingSlash: true,
        distDir: 'build',
        basePath: basePath,
        env: {
            basePath,
        },
        generateBuildId: async () => {
            // This could be anything, using the latest git hash
            return "Test5PkQ4Vf6Yx_feature"
        },
        // eslint: {
        //     ignoreDuringBuilds: true,
        // },
    }
}