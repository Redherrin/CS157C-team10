package all_your_rock;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class }, scanBasePackages={"com.example.services"})
@ComponentScan({"all_your_rock"})
@EnableMongoRepositories(basePackages = "all_your_rock.repository")
public class App {
			
	//npx kill-port 8080
	public static void main(String args[]) {
		SpringApplication.run(App.class, args);
		
	}
	
}