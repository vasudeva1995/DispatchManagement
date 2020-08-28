package DefaultPackage.modules.Lot.LotModels;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.persistence.AttributeConverter;
import java.io.IOException;
import java.util.Map;

 class HashMapConverter implements AttributeConverter<Map<String, Object>, String> {

    ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(Map<String, Object> datamap) {

        String jsondata = null;
        try {
            jsondata = objectMapper.writeValueAsString(datamap);
        } catch (final JsonProcessingException e) {
           throw new RuntimeException(e.getMessage());
        }
        return jsondata;
    }

    @Override
    public Map<String, Object> convertToEntityAttribute(String jsonData) {

        Map<String, Object> datamap = null;
        try {
            datamap = objectMapper.readValue(jsonData,new TypeReference<Map<String, Object>>() {});
        } catch (final IOException e) {
            throw new RuntimeException(e.getMessage());
        }

        return datamap;
    }

}