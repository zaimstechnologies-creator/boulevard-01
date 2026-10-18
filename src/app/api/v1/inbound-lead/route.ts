import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const {
      full_name,
      phone_number,
      email_address,
      inquiry_channel,
      project_interest,
      unit_interest_type,
      investor_type,
      inquiry_notes,
      partner_id,
      unit_code,
    } = payload;

    if (!full_name || !phone_number) {
      return NextResponse.json(
        { error: 'Full name and international phone number are required.' },
        { status: 400 }
      );
    }

    // Format phone number to clean E.164
    let cleanPhone = phone_number.replace(/[^0-9+]/g, '');
    if (cleanPhone.startsWith('03')) {
      cleanPhone = '+92' + cleanPhone.substring(1);
    } else if (cleanPhone.startsWith('923')) {
      cleanPhone = '+' + cleanPhone;
    }

    // Determine target sales desk routing based on project
    let assignedSalesDesk = 'Lahore Corporate Sales Directorate (Plaza 39 AA Commercial)';
    let assignedDirectors = ['Naeem Ahsan', 'Sheikh Zahid', 'Ans Jamil', 'Waqas Ayub', 'Khawaja Nadeem Lone', 'Iqra Nadeem'];

    if (project_interest === 'grand-12') {
      assignedSalesDesk = 'Islamabad Regional Directorate (Phase 8 Business District)';
      assignedDirectors = ['Ali Hamza'];
    }

    // Generate mock S3 pre-signed asset URL if document was requested
    const presignedDownloadUrl = `/downloads/brochures/${project_interest || 'boulevard01'}-master-dossier.pdf`;

    const leadRecord = {
      lead_id: `B01-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toISOString(),
      full_name,
      phone_number: cleanPhone,
      email_address: email_address || null,
      inquiry_channel,
      project_interest: project_interest || 'general',
      unit_interest_type: unit_interest_type || 'not_specified',
      investor_type: investor_type || 'domestic',
      inquiry_notes: inquiry_notes || null,
      partner_attribution_id: partner_id || null,
      unit_code: unit_code || null,
      sales_desk_assigned: assignedSalesDesk,
      officers_notified: assignedDirectors,
      download_asset_url: presignedDownloadUrl,
      status: 'new_assigned',
    };

    // Return successful response with tracking tokens and direct download access
    return NextResponse.json(
      {
        success: true,
        message: 'Lead registered and routed to dedicated sales directorate.',
        data: leadRecord,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Inbound Lead Processing Error:', error);
    return NextResponse.json(
      { error: 'Internal processing error occurred while capturing lead.' },
      { status: 500 }
    );
  }
}
