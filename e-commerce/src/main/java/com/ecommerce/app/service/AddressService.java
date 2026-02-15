package com.ecommerce.app.service;

import com.ecommerce.app.dto.request.AddressDTO;
import com.ecommerce.app.model.User;

public interface AddressService {
    AddressDTO createAddress(AddressDTO addressDTO, User user);

}
