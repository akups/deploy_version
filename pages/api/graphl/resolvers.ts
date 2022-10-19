import assets from "../assets.json";
import blocks from "../laneBlocks.json";
import _ from "lodash"


export const resolvers = {
    Query: {
        blocks: () => {
            return blocks;
        },
        block: (_: any, args: any) => {
            return (assets as any)[args.id];
        },
        asset: (__: any, args: any) => {
            const { title, id } = args;
            if (title && title.length > 0) {
                const series = _.find(assets, { title });
                return series;
            } else if (id && id.length > 0) {
                const series = _.find(assets, { id });
                return series;
            }
            return null;
        },
    },
};
