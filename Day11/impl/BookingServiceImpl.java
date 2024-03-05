package skcet.project.eventnest.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import skcet.project.eventnest.dto.request.AddBookingRequest;
import skcet.project.eventnest.dto.request.AddEventRequest;
import skcet.project.eventnest.dto.request.DeleteBookingRequest;
import skcet.project.eventnest.dto.request.DeleteEventRequest;
import skcet.project.eventnest.dto.request.UpdateBookingRequest;
import skcet.project.eventnest.dto.response.AddBookingResponse;
import skcet.project.eventnest.dto.response.AddEventResponse;
import skcet.project.eventnest.dto.response.BasicResponse;
import skcet.project.eventnest.dto.response.BookingResponse;
import skcet.project.eventnest.dto.response.DeleteBookingResponse;
import skcet.project.eventnest.dto.response.DeleteEventResponse;
import skcet.project.eventnest.dto.response.EventResponse;
import skcet.project.eventnest.dto.response.OptionalResponse;
import skcet.project.eventnest.dto.response.UpdateBookingResponse;
import skcet.project.eventnest.dto.response.UpdateEventResponse;
import skcet.project.eventnest.model.Booking;
import skcet.project.eventnest.model.Events;
import skcet.project.eventnest.repository.BookingRepo;
import skcet.project.eventnest.service.BookingService;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {
    // @Autowired
    // BookingRepo repo;

    private final BookingRepo repo ;

    @Override
    public AddBookingResponse addBooking(AddBookingRequest request) {

        var event = Booking.builder()
                        .name(request.getName())
                        .eventname(request.getEventname())
                        .location( request.getLocation())
                        .date( request.getDate() )
                        .build() ; 
        repo.save(event) ;
        
        return AddBookingResponse.builder().message("Booking added successfully").build();
    }

    @Override
    public DeleteBookingResponse deleteBooking( DeleteBookingRequest request )
    {

        Optional<Booking> optionalEvent = repo.findById(request.getId());

        if (optionalEvent.isPresent()) 
        {
            repo.deleteById( request.getId() );
            return DeleteBookingResponse.builder().message( "Booking deleted successfully").build();
        } 
        else 
        {
            return DeleteBookingResponse.builder().message("Booking not found").build();
        }
    }

    @Override
    public UpdateBookingResponse updateBooking(UpdateBookingRequest request) 
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
        Optional<Booking> optionalEvent = repo.findById(request.getId());

        if (optionalEvent.isPresent()) {
            Booking existingBooking = optionalEvent.get();
        
            existingBooking.setName(request.getName());
            existingBooking.setEventname(request.getEventname());
            existingBooking.setLocation(request.getLocation());
            existingBooking.setDate(request.getDate());

            // Save the updated event back to the repository
            repo.save(existingBooking);

            return UpdateBookingResponse.builder().message("Booking updated successfully").build();
        } else {
            return UpdateBookingResponse.builder().message("Booking not found").build();
        }
        
    }  

    @Override
    public BasicResponse<BookingResponse> showBooking() 
    {
        List<Booking> reponse = repo.findAll();
        List<BookingResponse>  bookingResponses = reponse.stream()
                .map(booking -> BookingResponse.builder()
                .id(booking.getId())
                .name(booking.getName())
                .eventname(booking.getEventname())
                .location(booking.getLocation())
                .date( booking.getDate() )
                .build())
                .collect(Collectors.toList());
        return BasicResponse.<BookingResponse>builder().message("User data fetched successfully!").data(bookingResponses).build();
    
    }
    
    // @Override
    // public Optional<Booking> showBookingById( int id ) 
    // {
    //     Optional<Booking> reponse = repo.findById( id );
        // OptionalResponse<BookingResponse>  bookingResponses = (OptionalResponse<BookingResponse>) reponse.stream()
        //         .map(booking -> BookingResponse.builder()
        //         .id(booking.getId())
        //         .name(booking.getName())
        //         .eventname(booking.getEventname())
        //         .location(booking.getLocation())
        //         .date( booking.getDate() )
        //         .build())
        //         .collect(Collectors.toList());
    //     return Optional.<Booking>builder().message("User data fetched successfully!").data(reponse).build();
    // }
    
    // public Optional<Booking> showBookingByid(int id){
    //     return repo.findById(id);
    // }

    
}
