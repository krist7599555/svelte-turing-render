/* eslint-disable @typescript-eslint/no-explicit-any */

export type BlockFunction = { type: 'function'; function: any };
export type BlockComponent = {
  type: 'component';
  component: any;
  props: Record<string, any>;
  events: Record<string, (args: any) => void>;
};
export type Block =
  | BlockComponent
  | BlockFunction
  | (() => Block)
  | Promise<Block>
  | Block[]
  | null
  | undefined
  | false;

export type BlockCompleteEvent = { complete: void };
