package skcet.project.eventnest.service;

import java.util.Optional;

import skcet.project.eventnest.dto.request.AddBookingRequest;
import skcet.project.eventnest.dto.request.DeleteBookingRequest;
import skcet.project.eventnest.dto.request.UpdateBookingRequest;
import skcet.project.eventnest.dto.response.AddBookingResponse;
import skcet.project.eventnest.dto.response.BasicResponse;
import skcet.project.eventnest.dto.response.BookingResponse;
import skcet.project.eventnest.dto.response.DeleteBookingResponse;
import skcet.project.eventnest.dto.response.UpdateBookingResponse;
import skcet.project.eventnest.model.Booking;

public interface BookingService {
    
    AddBookingResponse addBooking( AddBookingRequest request ) ;

    UpdateBookingResponse updateBooking( UpdateBookingRequest request ) ;

    DeleteBookingResponse deleteBooking( DeleteBookingRequest request ) ;

    BasicResponse<BookingResponse> showBooking( ) ;

    // Optional<Booking> showBookingById( int id ) ;
}