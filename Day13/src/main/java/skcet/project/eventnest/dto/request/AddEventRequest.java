package skcet.project.eventnest.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddEventRequest {

    private String name;
    private String organiser;
    private String participants;
    private String location;
    private String date;

}
