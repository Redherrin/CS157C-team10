import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import org.bson.BsonDocument;


public class Main {
	public static void main(String args[]) {
	  // Set system properties via commandline or programmatically
	  System.setProperty("javax.net.ssl.keyStore", "<path_to_keystore>");
	  System.setProperty("javax.net.ssl.keyStorePassword", "<keystore_password>");
	  String uri = "mongodb+srv://allyourrock-na.yc0t3gb.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
	  ConnectionString connectionString = new ConnectionString(uri);
	  MongoClientSettings settings = MongoClientSettings.builder()
	        .applyConnectionString(connectionString)
	        .serverApi(ServerApi.builder()
	            .version(ServerApiVersion.V1)
	            .build())
	        .build();
	  MongoClient mongoClient = MongoClients.create(settings);
	  MongoDatabase database = mongoClient.getDatabase("testDB");
	  MongoCollection<Document> collection = database.getCollection("testCol");
	  BsonDocument filter = new BsonDocument();
	  collection.countDocuments(filter);
	  mongoClient.close();
	}
}