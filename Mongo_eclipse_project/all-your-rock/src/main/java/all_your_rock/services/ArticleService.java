package all_your_rock.services;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import all_your_rock.models.Article;

@Service
public class ArticleService {
    
    @Autowired
    private MongoTemplate mongoTemplate;
    

    public List<Article> findAllArticles() {
    	Query query = new Query();
        List<Article> articleList = mongoTemplate.find(query, Article.class);
        return articleList;
    }

    public Article findArticleById(String id) {
    	Query query = new Query(Criteria.where("_id").is(id));
        Article article = mongoTemplate.findOne(query, Article.class);
        System.out.println(article);
        return article;
    }
    
    public List<Article> findArticlesByKeyword(String searchString){
    	Query query = new Query(Criteria.where("title").regex(searchString, "i"));
        List<Article> articleMatches = mongoTemplate.find(query, Article.class);
        return articleMatches;
    }

    public Article createArticle(Article article) {
        article.setId(new ObjectId().toHexString());
        mongoTemplate.save(article);
        return article;
    }

    public Article updateArticle(String id, Article article) throws Exception {
    	Query query = new Query(Criteria.where("_id").is(id));
        Article updatedArticle = mongoTemplate.findOne(query, Article.class);
        
        if(updatedArticle == null) {
        	throw new Exception("Article does not exist with id " + id);
        }
        
        updatedArticle.setTitle(article.getTitle());
        updatedArticle.setSubtitle(article.getSubtitle());
    	updatedArticle.setAuthor(article.getAuthor());
    	updatedArticle.setBody(article.getBody());
    	updatedArticle.setDate(article.getDate());
    	updatedArticle.setLastUpdatedDate(article.getLastUpdatedDate());
    	
        return mongoTemplate.save(updatedArticle);
    }

    public void deleteArticle(String id) throws Exception {
    	Query query = new Query(Criteria.where("_id").is(id));
    	Article removedArticle = mongoTemplate.findOne(query, Article.class);
    	if(removedArticle == null) {
    		throw new Exception("Article does not exist with id " + id);
    	}
        mongoTemplate.remove(query, Article.class);
    }
}
