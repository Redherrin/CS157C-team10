package all_your_rock.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.bson.Document;
import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import all_your_rock.models.Article;
import all_your_rock.services.ArticleService;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@RestController
@RequestMapping("/articles")
public class ArticleController {
	
	private MongoCollection<Article> articles;
	private MongoDatabase db;
	private ArticleService articleService;
	
	@Autowired
    public ArticleController(MongoDatabase db, ArticleService articleService) {
        this.db = db; 
        this.articles = db.getCollection("articles", Article.class);
        this.articleService = articleService;
    }
	
	@GetMapping
	public ResponseEntity<List<Article>> getArticles() {
        List<Article> articleList = articleService.findAllArticles();
        return new ResponseEntity<>(articleList, HttpStatus.OK);
    }
	
	@GetMapping("/{id}")
    public ResponseEntity<Article> findArticleById(@PathVariable("id") String id) {
        Article article = articleService.findArticleById(id);
        return new ResponseEntity<Article>(article, HttpStatus.OK);
    }
	
	@PostMapping("/add")
	public ResponseEntity<Article> createArticle(@RequestBody Article article) {
		Article newArticle = articleService.createArticle(article);
		return new ResponseEntity<Article>(newArticle, HttpStatus.CREATED);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Article> updateArticle(@PathVariable("id") String id, @RequestBody Article article){
		try{
			Article updatedArticle = articleService.updateArticle(id, article);
			return new ResponseEntity<Article>(updatedArticle, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
}
