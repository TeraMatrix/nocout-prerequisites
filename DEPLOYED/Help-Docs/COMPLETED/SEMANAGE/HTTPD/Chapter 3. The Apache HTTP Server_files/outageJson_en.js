/*
 * This file should only contain scheduled Portal outage messages.
 *
 * The syntax for an entry is:
 * message: the message to be displayed
 * start: a Date() obj of when the message should start/appear
 * end: a Date() obj of when the message should end/disappear
 *
 * Example outage message entry:
 * {
 * message: "Outage!!!",
 * start: new Date("April 13, 2012 11:13:00"),
 * end: new Date("October 13, 2012 11:13:00")
 * }
 *
 * Another example outage message entry:
 * {
 * 		 message: "Outage test!!!",
 * 		 start: new Date("April 13, 2001 11:13:00"),
 * 		 end: new Date("October 13, 2001 11:13:00")
 * 	 },
 * 	 {
 * 		 message: "I can't believe Portal still exists!!!",
 * 		 start: new Date("January 13, 3000 11:13:00"),
 * 		 end: new Date("December 13, 3000 11:13:00")
 * 	 }
 *
 * Please remember to terminate the array of messages *without* a comma!
 */

var portalOutageObj =
	[
{ 		
		 message: "Support Cases will be unavailable at times on June 22 for scheduled maintenance. \u003ca href=\"https://access.redhat.com/site/announcements/964553\"\u003eMore details\u003c/a\u003e.",
		 start: new Date("June 17, 2014 00:00:00"),
		 end: new Date("June 22, 2014 05:00:00")
},
{
		 message: "Portions of the Customer Portal will be unavailable at times on July 12 for scheduled maintenance. \u003ca href=\"https://access.redhat.com/site/announcements/959873\"\u003eMore details\u003c/a\u003e.",
		 start: new Date("June 30, 2014 01:00:00"),
		 end: new Date("July 13, 2014 01:00:00")
}
    ];
