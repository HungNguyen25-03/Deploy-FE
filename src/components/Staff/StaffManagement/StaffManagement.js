import React from 'react';
import NavBarStaff from '../NavBar/NavBarStaff';
import { Route, Routes } from 'react-router-dom';
import GetTrackOrder from '../TrackOrder/GetTrackOrder';
import GetManageUser from '../ManageUser/GetManageUser';
import GetManagePosts from '../ManagePosts/GetManagePosts';
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder';
import ManageVoucher from '../CreateVoucher/ManageVoucher';
import ManageInventory from '../ManageInventory/ManageInventory';

export default function StaffManagement() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-sm-3">
                    <NavBarStaff />
                </div>
                <div className="col-md-10 col-sm-9">
                    <Routes>
                        <Route path='/comfirm_order' element={<ConfirmOrder />} />
                        <Route path='/manage_inventory' element={<ManageInventory />} />
                        <Route path='/manage_users' element={<GetManageUser />} />
                        <Route path='/create_voucher_codes' element={<ManageVoucher />} />
                        {/* <Route path='/track_orders' element={<GetTrackOrder />} />
                        <Route path='/manage_posts' element={<GetManagePosts />} /> */}
                    </Routes>
                </div>
            </div>
        </div>
    );
}