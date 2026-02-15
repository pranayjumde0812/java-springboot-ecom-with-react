package com.ecommerce.app.service.impl;

import com.ecommerce.app.dto.request.AddressDTO;
import com.ecommerce.app.model.Address;
import com.ecommerce.app.model.User;
import com.ecommerce.app.repository.AddressRepository;
import com.ecommerce.app.service.AddressService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public AddressDTO createAddress(AddressDTO addressDTO, User user) {
        Address address = modelMapper.map(addressDTO, Address.class);

        List<Address> addresses = user.getAddresses();
        addresses.add(address);
        user.setAddresses(addresses);

        address.setUser(user);
        Address savedAddress = addressRepository.save(address);
        return modelMapper.map(savedAddress, AddressDTO.class);
    }
}
