package skcet.project.eventnest.dto.response;

import java.util.Collections;
import java.util.Optional;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OptionalResponse<T> {
    
    private String message;
    // @Builder.Default
    // private Optional<T> data ;
}
