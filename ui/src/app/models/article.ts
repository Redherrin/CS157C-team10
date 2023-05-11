import { Chunk } from "./chunk";
import { TextChunk } from "./text-chunk";
import { MediaChunk } from "./media-chunk";

export interface Article {
	id: string;
	userId: string;
	title: string;
	subtitle: string;
	author: string;
	// body: string;
	date: string;
	lastUpdatedDate: string;
	chunks: Chunk[];
}
