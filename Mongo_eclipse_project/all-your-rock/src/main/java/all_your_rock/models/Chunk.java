package all_your_rock.models;

public class Chunk<T> {
	
	private String type;
	private T data;

	public Chunk() {
		
	}
	
	public Chunk(String type) {
		this.type = type;
	}
	
	public T getData() {
		return this.data;
	}
	
	public String getType() {
		return this.type;
	}
	
	public void setData(T data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "Chunk [type=" + type + ", data=" + data + "]";
	}
	
	
}
