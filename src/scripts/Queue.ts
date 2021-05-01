export default class Queue<Block> {
	elements: Array<Block>;
	maxLength: number | undefined;

	constructor(maxLength?: number) {
		this.elements = [];
		maxLength && maxLength > 0
			? (this.maxLength = maxLength)
			: (this.maxLength = undefined);
	}

	enqueue(item: Block) {
		this.elements.push(item);
	}

	dequeue() {
		return this.elements.shift();
	}

	bounce(item: Block) {
		this.enqueue(item);
		if (this.maxLength && this.maxLength < this.length())
			return this.dequeue();
	}

	isEmpty() {
		return this.elements.length === 0;
	}

	peek() {
		return !this.isEmpty() ? this.elements[0] : undefined;
	}

	length() {
		return this.elements.length;
	}
}
