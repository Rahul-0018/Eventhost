package skcet.project.eventnest.service;

import java.util.List ;

import skcet.project.eventnest.dto.request.AddEventRequest;
import skcet.project.eventnest.dto.request.DeleteEventRequest;
import skcet.project.eventnest.dto.request.UpdateEventRequest;
import skcet.project.eventnest.dto.response.AddEventResponse;
import skcet.project.eventnest.dto.response.BasicResponse;
import skcet.project.eventnest.dto.response.DeleteEventResponse;
import skcet.project.eventnest.dto.response.EventResponse;
import skcet.project.eventnest.dto.response.UpdateEventResponse;
import skcet.project.eventnest.model.Events;

public interface EventService {
    
    AddEventResponse addEvent( AddEventRequest e ) ;

    UpdateEventResponse updateEvent( UpdateEventRequest request ) ; 

    DeleteEventResponse deleteEvent( DeleteEventRequest request ) ;

    BasicResponse<EventResponse> allEvents ( ) ;

}
