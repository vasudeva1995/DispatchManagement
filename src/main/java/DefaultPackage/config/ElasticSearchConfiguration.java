package DefaultPackage.config;

import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.TransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;

import java.net.InetAddress;

@Configuration
public class ElasticSearchConfiguration {

    @Bean
    public Client client() {
        Settings elasticsearchSettings = Settings.builder()
                .put("client.transport.sniff", false)
                .put("cluster.name", "elasticsearch-vasudeva").build();

        TransportClient client = new PreBuiltTransportClient(elasticsearchSettings);
        try {

            client.addTransportAddress(new TransportAddress(InetAddress.getByName("127.0.0.1"), 9300));
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return client;
    }
}
