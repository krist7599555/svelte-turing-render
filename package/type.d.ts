export declare type BlockFunction = {
    type: 'function';
    function: any;
};
export declare type BlockComponent = {
    type: 'component';
    component: any;
    props: Record<string, any>;
    events: Record<string, (args: any) => void>;
};
export declare type Block = BlockComponent | BlockFunction | (() => Block) | Promise<Block> | Block[] | null | undefined | false;
export declare type BlockCompleteEvent = {
    complete: void;
};
