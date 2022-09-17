/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SvelteComponent } from 'svelte';
import type { Class } from 'type-fest';

export type BlockFunction = { type: 'function'; function: any };
export type BlockComponent = {
  type: 'component';
  component: Class<SvelteComponent>;
  props: Record<string, any>;
  events: Record<string, (...args: any[]) => void>;
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
