import {
  NullstackClientContext,
  NullstackServerContext
} from 'nullstack/types';

export type NullstackContext = NullstackClientContext & NullstackServerContext;