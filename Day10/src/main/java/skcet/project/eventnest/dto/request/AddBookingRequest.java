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
public class AddBookingRequest {

    private int id;
    private String name;
    private String eventname;
    private String location;
    private String date;
    

}

