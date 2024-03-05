package skcet.project.eventnest.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import skcet.project.eventnest.dto.request.AddEventRequest;
import skcet.project.eventnest.dto.request.DeleteEventRequest;
import skcet.project.eventnest.dto.request.UpdateEventRequest;
import skcet.project.eventnest.dto.response.AddEventResponse;
import skcet.project.eventnest.dto.response.BasicResponse;
import skcet.project.eventnest.dto.response.DeleteEventResponse;
import skcet.project.eventnest.dto.response.EventResponse;
import skcet.project.eventnest.dto.response.UpdateEventResponse;
import skcet.project.eventnest.dto.response.UserResponse;
import skcet.project.eventnest.model.Events;
import skcet.project.eventnest.model.Users;
import skcet.project.eventnest.repository.EventRepo;
import skcet.project.eventnest.service.EventService;

@Service
@RequiredArgsConstructor
public class EventServicesImpl implements EventService{
    
    private final EventRepo repo;
    
    @Override
    public AddEventResponse addEvent(AddEventRequest request) {

        var event = Events.builder()
                        .name(request.getName())
                        .organiser(request.getOrganiser())
                        .participants(request.getParticipants())
                        .location( request.getLocation())
                        .date( request.getDate() )
                        .build() ; 
        repo.save(event) ;
        
        return AddEventResponse.builder().message("Event added successfully").build();
    }

    @Override
    public UpdateEventResponse updateEvent( UpdateEventRequest request ) 
    {

        // var event = Events.builder()
        //                 .name(request.getName())
        //                 .organiser(request.getOrganiser())
        //                 .participants(request.getParticipants())
        //                 .location( request.getLocation())
        //                 .date( request.getDate() )
        //                 .build() ; 
        // repo.save(event) ;
        
        // return UpdateEventResponse.builder().message("Event updated successfully").build();
        Optional<Events> optionalEvent = repo.findById(request.getId());

        if (optionalEvent.isPresent()) {
            Events existingEvent = optionalEvent.get();
        
            existingEvent.setName(request.getName());
            existingEvent.setOrganiser(request.getOrganiser());
            existingEvent.setParticipants(request.getParticipants());
            existingEvent.setLocation(request.getLocation());
            existingEvent.setDate(request.getDate());

            // Save the updated event back to the repository
            repo.save(existingEvent);

            return UpdateEventResponse.builder().message("Event updated successfully").build();
        } else {
            return UpdateEventResponse.builder().message("Event not found").build();
        }
        
    }    
    
    @Override
    public DeleteEventResponse deleteEvent( DeleteEventRequest request )
    {

        Optional<Events> optionalEvent = repo.findById(request.getId());

        if (optionalEvent.isPresent()) 
        {
            repo.deleteById( request.getId() );
            return DeleteEventResponse.builder().message( "Event deleted successfully").build();
        } 
        else 
        {
            return DeleteEventResponse.builder().message("Event not found").build();
        }
    }

    @Override
    public BasicResponse<EventResponse> allEvents() 
    {
        List<Events> events = repo.findAll();
        List<EventResponse> eventResponses = events.stream()
                .map(event -> EventResponse.builder()
                .id(event.getId())
                .name(event.getName())
                .organiser(event.getOrganiser())
                .participants(event.getParticipants())
                .location(event.getLocation())
                .date( event.getDate() )
                .build())
                .collect(Collectors.toList());
        return BasicResponse.<EventResponse>builder().message("User data fetched successfully!").data(eventResponses).build();
    }

}
