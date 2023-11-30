import React from "react";

function KYC() {
    return (
        <div class="max-w-4xl mx-auto  bg-white p-6 rounded-md shadow-md">
            <div class="mb-6 flex items-center justify-center">
                <h1 class="text-2xl font-bold underline">
                    KYC Policy
                </h1>
            </div>
            <p>
                When a user makes an aggregate lifetime total of deposits exceeding
                EUR 2000 or requests a withdrawal of any amount inside the
                https://Betzhub.co platform, then it is compulsory for them to perform
                a full KYC process.</p><br /> <p>During this process, the user will have to input
                    some basic details about themselves and then upload</p>

            <div class="mb-6">
                <ol start="1" class="list-decimal list-inside">
                    <li>A copy of Government Issued Photo ID (in some cases front and back
                        depending on the document)</li>
                    <li>A selfie of themselves holding the ID
                        document </li>
                    <li>A bank statement/Utility Bill</li>
                </ol>
                <br />
                <p>Once uploaded, the user will
                    get a “Temporarily Approved” Status and the documents will now be on
                    our side, and the “KYC Team” will have 24hrs to go over them and email
                    the user about the outcome:</p>
            </div>
            <div className="mb-6">
                <ul class="list-none list-inside">
                    <li class="before:content-['-']">Approval</li>
                    <li class="before:content-['-']">Rejection</li>
                    <li class="before:content-['-']">More information needed – No change in Status</li>
                </ul>
                <br />
                <p>          When the user is on “Temporarily Approved” Status then
                </p>
                <br />
                <ul class="list-none list-inside">
                    <li class="before:content-['-']">They can use the platform normally</li>
                    <li class="before:content-['-']">They cannot deposit more than
                        EUR 500 in aggregate total</li>
                    <li class="before:content-['-']">They cannot complete any withdrawal.</li>
                </ul>
            </div>

            <div class="mb-6">
                <h2 class="text-xl font-bold mb-2"> Guideline for the “KYC Process”</h2>
                <ol start="1" class="list-decimal list-inside">
                    <li>Proof of ID
                    <ol style={{ listStyleType: 'lower-alpha' }}>
                            <li>Signature should be there in the document</li>
                            <li>Country is not a Restricted Country: United
                                States of America and its territories, France and its territories,
                                Netherlands and its territories and countries that form the Kingdom of
                                Netherlands including Bonaire, Sint Eustatius, Saba, Aruba, Curacao
                                and Sint Maarten, Australia and its territories, United Kingdom of
                                Great Britain, Northern Ireland, Spain</li>
                            <li> Full Name matches client’sname </li>
                            <li> Document does not expire in the next 3 months</li>
                            <li> Owner is over18 years of age</li>
                        </ol>
                    </li>
                    <br />
                    <li>Proof of Residence
                    <ol style={{ listStyleType: 'lower-alpha' }}>
                            <li>Bank Statement or Utility Bill</li>
                            <li>Country is
                                not a Restricted Country: United States of America and its
                                territories, France and its territories, Netherlands and its
                                territories and countries that form the Kingdom of Netherlands
                                including Bonaire, Sint Eustatius, Saba, Aruba, Curacao and Sint
                                Maarten, Australia and its territories, United Kingdom of Great
                                Britain, Northern Ireland, Spain, and Cyprus.</li>
                            <li>Full Name matches client’s name and is same as in proof of ID</li>
                            <li>Date of Issue: In the last 3 months</li>
                        </ol>
                    </li>
                    <br />
                    <li>Selfie with ID
                    <ol style={{ listStyleType: 'lower-alpha' }}>
                            <li>Holder is the same as in the ID document above</li>
                            <li>ID document is the same as in “1”. Make sure photo/ID number is the same</li>
                        </ol>
                    </li>
                </ol>
            </div>
            <div className="mb-6">
                <h2 class="text-xl font-bold mb-2"> Notes on the “KYC Process”</h2>
                <ol start="1" class="list-decimal list-inside">
                    <li> When the KYC process is unsuccessful then the reason is documented
                        and a support ticket is created in the system.</li>
                    <li>The ticket number along
                        with an explanation is communicated back to the user.</li>
                    <li> Once all
                        proper documents are in our possession then the account gets approved.
                    </li>
                </ol>
            </div>

            <div className="mb-6">
                <h2 class="text-xl font-bold mb-2"> “Other AML measures”</h2>
                <ol start="1" class="list-decimal list-inside">
                    <li>If a user has not passed full KYC then they cannot make additional
                        deposits or withdrawals of any amount.</li>
                        <br/>
                    <li>If a user has passed the KYCprocess successfully then
                        <ol style={{ listStyleType: 'lower-alpha' }}>
                            <li>There is a deposit limit per transaction (max EUR 2,000)</li>
                            <li>Prior to any withdrawal there is a detailed
                                algorithmic and manual check on the activity and balance of the user
                                to see if the amount withdrawn is a result of proper activity in the
                                platform.</li>
                        </ol>

                    </li><br/>
                    <li>Under no circumstances may a user transfer funds directly
                        to another user.
                    </li>
                </ol>

            </div>
        </div>
    );
}

export default KYC;
