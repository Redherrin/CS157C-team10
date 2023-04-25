package all_your_rock;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

@Configuration
public class MongoConnection {
	
	/*@Bean
    public MongoClient mongoClient() {
        return MongoClients.create("mongodb://localhost:27017");
    }

	@Bean
	public MongoDatabase mongoDatabase() {
	    return mongoClient().getDatabase("all_your_rock");
	}*/
	
	
	@Bean
    public MongoTemplate mongoTemplate() throws Exception {
		return new MongoTemplate(MongoClients.create("mongodb://localhost:27017"), "all_your_rock");
    }
}
